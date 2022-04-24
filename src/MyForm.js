import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import { telTest, EmailTest, minLengthTest} from './validation'
import { Navigate } from "react-router-dom";
import { dispatchEmail, dispatchTel, dispatchText, dispatchSub } from './redux/inputReducer'
import { useDispatch } from "react-redux";
const MyForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailDirty, setemailDirty] = useState(false);
  const [emailError, setemailError] = useState("");
  const handleEmail = (e) => { setEmail(e.target.value) };

  const [TextDirty, setTextDirty] = useState(false);
  const [TextError, setTextError] = useState("не может быть пустым");
  const [Text, setText] = useState("");
  const handleText = (e) => { setText(e.target.value) };

  const [tel, settel] = useState("");
  const [telDirty, settelDirty] = useState(false);
  const [telError, settelError] = useState("");
  const handleTel = (e) => { settel(e.target.value) };


  const [NameDirty, setNameDirty] = useState(false);
  const [NameError, setNameError] = useState("не может быть пустым");
  const [Name, setName] = useState("");
  const handleName = (event) => { setName(event.target.value) };

  const [DateDirty, setDateDirty] = useState(false);
  const [DateError, setDateError] = useState("не может быть пустым");
  const [Date, setDate] = useState("");
  const handleDate = (event) => { setDate(event.target.value) };

  const [selectDirty, setselectDirty] = useState(false);
  const [selectError, setselectError] = useState("не может быть пустым");
  const [select, setSelect] = useState("");
  const handleSelect = (event) => { setSelect(event.target.value) };

  const [SexDirty, setSexDirty] = useState(false);
  const [SexError, setSexError] = useState("не может быть пустым");
  const [Sex, setSex] = useState("");
  const handleSex = (event) => { setSex(event.target.value) };

  const [Sub, setSub] = useState(false);
  const handleSub = () => { setSub(!Sub) };

  const [FormValid, setFormValid] = useState(false);

  useEffect(() => {
    dispatch(dispatchEmail(email))
    dispatch(dispatchTel(tel))
    dispatch(dispatchText(Text))
    console.log('eff', Sub);
    dispatch(dispatchSub(Sub))
  }, [tel, Text, email, Sub]);


  useEffect(() => {
    if (Sub) {
      if (emailError || telError || NameError || selectError || SexError || TextError) {
        setFormValid(false)
      } else setFormValid(true)
    } else {
      if (NameError || selectError || SexError || TextError) {
        setFormValid(false)
      } else setFormValid(true)
    }

  }, [emailError, telError, NameError, selectError, SexError, TextError, Sub])


  const handleSubmit = (e) => {
    e.preventDefault();

    setNameDirty(true);
    if (!Name) {
      setNameError("Поле 'ФИО' не может быть пустым");
    } else {

      setNameError("");
    }

    setselectDirty(true);
    if (!select) {
      setselectError("Поле 'Старна' не может быть пустым");
    } else {
      setselectError("");
    }
    setSexDirty(true);
    if (!Sex) {
      setSexError("Поле 'Пол' не может быть пустым");
    } else {
      setSexError("");
    }
    setTextDirty(true);
    if (!Text) {
      setTextError("Поле 'Текст' не может быть пустым");
    } else if (minLengthTest(Text)) setTextError("Сообщение должно содержать более 100 мимволов");
    else {
      setTextError("");
    }

    if (Sub) {
      setemailDirty(true);
      if (!email) {
        setemailError("Поле 'Почта' не может быть пустым");
      } else if (!EmailTest(email)) {
        setemailError("некорректный емайл");
      } else {
        setemailError("");
      }
      settelDirty(true);
      if (!tel) {
        settelError(" Поле 'Телефон' не может быть пустым");
      } else if (!telTest(tel)) settelError("некорректный Телефон");
      else {
        settelError("");
      }
    } else {                          //не работает
      setEmail('')
      settel('')
      setemailError("");
      settelError("");
    }


  };
  const clear = (e) => {
    e.preventDefault()
    setName('')
    setDate('')
    setSelect('')
    setSex('')
    setText('')
    settel('')
    setEmail('')
  }
  return (<>
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Форма обратной связи</h1>

      <Input type="text" placeholder="ФИО" value={Name} onChange={handleName} header="ФИО*" Dirty={NameDirty} Error={NameError} />
      <Input type="date" placeholder="Дата рождения" value={Date} onChange={handleDate} header="Дата рождения" Dirty={DateDirty} Error={DateError} />


      <label>
        {selectDirty && selectError && (<div style={{ color: "rgb(187, 77, 77)" }}>{selectError}</div>)}
        Страна*
        <select value={select} onChange={handleSelect}  >
          <option></option>
          <option value="Россия">Рооссия</option>
          <option value="ГРузия">ГРузия</option>
          <option value="Армения">Армения</option>
          <option value="США">США</option>
          <option value="Германия">Германия</option>
        </select>
      </label>


      <Input type="radio" name="sex" value="Male" onChange={handleSex} header="Male*" Dirty={SexDirty} Error={SexError} />
      <Input type="radio" name="sex" value="FeMale" onChange={handleSex} header="FeMale*" Dirty={SexDirty} Error={SexError} />


      <label>
        {TextDirty && TextError && (<div style={{ color: "rgb(187, 77, 77)" }}>{TextError}</div>)}
        Text*
        <textarea value={Text} onChange={handleText} />

      </label>
      <Input type="checkbox" value={Sub} onChange={handleSub} header="Подписаться" />

      {Sub && <>
        <Input onChange={handleEmail} value={email} header="email" name="email" type="text" placeholder="email" Dirty={emailDirty} Error={emailError} />
        <Input onChange={handleTel} value={tel} header="tel" name="tel" type="tel" placeholder="tel" Dirty={telDirty} Error={telError} />
      </>}

      <Button disabled type="button" Sub={Sub} Name={Name} Date={Date} select={select} Sex={Sex} Text={Text} tel={tel} email={email} onClick={(e) => clear(e)}> Очистить</Button>
      <Button type="submit">ОТправить</Button>

    </form>
    {FormValid && <Navigate to="/More" replace={true} />}
  </>


  )
};

export default MyForm;
