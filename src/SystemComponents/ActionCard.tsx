import React, { useState } from 'react';
import axios from 'axios';
import styles from './ActionCard.module.css';

interface ActionProps {
  action: {
    actionName: string;
    actionUrl: string;
    actionMethod: string;
    actionBodyParams: { [key: string]: string };
    actionQueryParams: { [key: string]: string };
  };
}

const ActionCard: React.FC<ActionProps> = ({ action }) => {
  const [params, setParams] = useState<any>({});
  const [response, setResponse] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const queryParams = new URLSearchParams();
      for (const key in action.actionQueryParams) {
        queryParams.append(key, params[key]);
      }

      const config = {
        method: action.actionMethod,
        url: `${action.actionUrl}?${queryParams.toString()}`,
        data: Object.keys(action.actionBodyParams).length > 0 ? params : null
      };

      const result = await axios(config);
      setResponse(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.actionCard}>
      <h3>{action.actionName}</h3>
      <div className={styles.paramsContainer}>
        {Object.keys(action.actionQueryParams).map(param => (
          <div key={param}>
            <label>{param}</label>
            <input
              type="text"
              name={param}
              onChange={handleChange}
            />
          </div>
        ))}
        {Object.keys(action.actionBodyParams).map(param => (
          <div key={param}>
            <label>{param}</label>
            <input
              type="text"
              name={param}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Execute</button>
      {response && <div className={styles.responseContainer}>{JSON.stringify(response, null, 2)}</div>}
    </div>
  );
};

export default ActionCard;
