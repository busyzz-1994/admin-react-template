/*
 * @Author: busyzz
 * @Date: 2021-11-02 21:30:41
 * @Description:
 */
import React, { FC, useState, useEffect } from 'react';

interface Person {
  person: { name: string; age: number };
}

const Button: FC<Person> = () => {
  const [state, setstate] = useState<Person>({
    person: {
      name: 'busyzz',
      age: 123,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      // 假设 data 为后端返回的值
      const data = {} as Person;
      setstate(data);
    }, 1000);
  }, []);
  return <div>{state.person.age}</div>;
};

export default Button;
