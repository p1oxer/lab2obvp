import { useState, useEffect } from "react";

import "./App.css";

function App() {
    // const [value, setValue] = useState("");
    // const [value2, setValue2] = useState('')
    // const [value, setValue] = useState(0)
    // const [value2, setValue2] = useState(0)
    // const [value3, setValue3] = useState(0)
    // const [value4, setValue4] = useState(0)
    // const [value5, setValue5] = useState(0)
    // const [result, setResult] = useState(0)

    //   const initDate = { year: 2025, month: 12, day: 31 };

    //   const [day, setDay] = useState(initDate.day);
    //   const [month, setMonth] = useState(initDate.month);
    //   const [year, setYear] = useState(initDate.year);
    //   const [testDate, setTestDate] = useState(new Date(initDate.year, initDate.month - 1, initDate.day));

    // Задание 12
    // const initNotes = [
    //   { id: 1, name: "name1", desc: "long description 1" },
    //   { id: 2, name: "name2", desc: "long description 2" },
    //   { id: 3, name: "name3", desc: "long description 3" },
    //   ];

    //   const [notes, setNotes] = useState(initNotes);
    //   const [id, setId] = useState();
    //   const [name, setName] = useState();
    //   const [desc, setDesc] = useState();

    //   const result = notes.map((note) => {
    //     return (
    //     <p key={note.id}>
    //     {note.name}, <i>{note.desc}</i>
    //     </p>
    //     );
    //     });

    //     function push () {
    //       if (id != '' && name != '' && desc != '')
    //       setNotes([...notes, {id, name, desc}])
    //     console.log(notes)
    //     }
    //   useEffect(() => {
    //     const newDate = new Date(year, month - 1, day);
    //     setTestDate(newDate);
    // }, [day, month, year]);

    // const [input, setInput] = useState('')
    // const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    // const result = notes.map((note, index) => {
    // return <li key={index}>{note}</li>;
    // });

    // function addResult () {
    //   const lastElem = notes[notes.length-1]
    //   setNotes([...notes, [ parseInt(lastElem) +1, ' ',  input] ])
    // }
    // const [isChild, setIsChild] = useState()

    // const [country, setCountry] = useState()
    // const [age, setAge] = useState()

    // const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    // function changeHandler (index, e) {
    //   setArray([...array.slice(0, index), Number(e.target.value), ...array.slice(index + 1)])
    // }

    // const test = array.map((elem, index) => {
    //   return <input type='number' key={index} value={elem} onChange={(e) =>
    //     changeHandler(index, e)} />
    // })

    // function getSum (array) {
    //   let sum = 0
    //   let amount = 0
    //   array.map((elem) => {
    //     if (elem != '' && elem != 0) {
    //       amount++
    //     }
    //     sum += elem
    //   })
    //   return (sum / amount).toFixed(2)
    // }

    // useEffect(() => {

    //   function sum() {
    //     const arr = [value, value2, value3, value4, value5]
    //     let amount = 0

    //     for (let i = 0; i < arr.length; i++)
    //       if (arr[i] != 0) amount++

    //     const sum = Number(value) + Number(value2) + Number(value3) + Number(value4) + Number(value5)
    //     setResult(sum / amount)

    //   }

    //   sum()

    // }, [value, value2, value3, value4, value5])

    return (
        <>
            {/* Задание 1-2 */}
            {/* <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <input type="text" onChange={(e) => setValue2(e.target.value)}/>

      <p>Значение инпута: {value} , количество символов: {value.toString().length}</p> <br />
      <p>Значение инпута: {value2} , количество символов: {value2.toString().length}</p> <br /> */}

            {/* Задание 3 */}
            {/* <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="number" value={value2} onChange={(e) => setValue2(e.target.value)} />
      <input type="number" value={value3} onChange={(e) => setValue3(e.target.value)} />
      <input type="number" value={value4} onChange={(e) => setValue4(e.target.value)} />
      <input type="number" value={value5} onChange={(e) => setValue5(e.target.value)} />
      {!isNaN(result) &&
        <p>{result}</p>
      } */}

            {/* Задание 4 */}
            {/* 
      <input type="checkbox" onChange={(e) => setIsChild(prev => !prev)} />

      {isChild ? (<div>
        <h2>Ура, вам уже есть 18</h2>
        <p> здесь расположен контент только для взрослых </p>
      </div>) : (<div>
        <p> увы, вам еще нет 18 лет:( </p>
      </div>)} */}

            {/* <h1>Возраст пользователя: {age}</h1>

	// Задание 5
      <select name="" id="" onChange={(e) => {
		  setCountry(e.target.value)
		  }}>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Вологда">Вологда</option>
        <option value="Лондон">Лондон</option>
      </select> */}

            {/* <h1>Выбор пользователя: {country}</h1>

// Задание 6
<select name="" id="" onChange={(e) => {
  setAge(e.target.value)
}}>
  <option value="0-12">0-12</option>
  <option value="13-17">13-17</option>
  <option value="18-25">18-25</option>
  <option value="25+">25+</option>
</select> */}

{/* Задание 7	 */}
            {/* <h1>
{test} <br />{getSum(array)}

</h1> */}

				{/* Задание 8-9 */}
            {/* <input placeholder='день' type="text" onChange={(e) => {
          setDay(e.target.value)
        }}/>
        <input placeholder='месяц' type="text" onChange={(e) => {
          setMonth(e.target.value)
        }}/>
        <input placeholder='год' type="text" onChange={(e) => {
          setYear(e.target.value)
        }}/>

      <p>Год: {year}</p>
      <p>Месяц: {month}</p>
      <p>День: {day}</p>
      <p>День недели: {(() => {
        switch (testDate.getDay()) {
          case 1:
            return ('Понедельник')
          case 2:
            return ('Вторник')
          case 3:
            return ('Среда')
          case 4:
            return ('Четверг')
          case 5:
            return ('Пятница')
          case 6:
            return ('Суббота')
          case 0:
            return ('Воскресенье')

          default:
            return ('Не понятно')

        }
      })()}</p> */}

	{/* Задание 10-11 */}
            {/* <div>
  <input type="text" onChange={(e) => setInput(e.target.value)}/>
  <button onClick={addResult}>Добавить</button>
<ul> {result} </ul>
</div> */}

            {/* Задание 12-13 */}
            {/* <input type="text" onChange={(e) => setId(e.target.value)}/>
<input type="text" onChange={(e) => setName(e.target.value)}/>
<input type="text" onChange={(e) => setDesc(e.target.value)}/>
<button onClick={push}>Добавить</button>

<div> {result} </div> */}
        </>
    );
}

export default App;
