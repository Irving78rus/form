import React  from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const More = () => {
  const Text = useSelector((state) => state.inputReducer.Text);
  const email = useSelector((state) => state.inputReducer.email);
  const tel = useSelector((state) => state.inputReducer.tel);
  const isSub = useSelector((state) => state.inputReducer.isSub);
  console.log(isSub);
  return (
    <div className="App">
      <div className="text" >Ваше сообщение {Text} отправлено</div>
      
      <div>
        {isSub
          ? ` Вы были подписаны на обновления по номеру телефона ${tel} и по email ${email}`
          : null}
      </div>
      <NavLink to="/"> отправить еще одно </NavLink>
    </div>
  );
};

export default More;
