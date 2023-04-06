import React, { useState } from 'react'
import './slide.css'
import { peoples } from '../data';
import { FaChevronLeft, FaChevronRight, FaQouteRight } from 'react-icons/fa';


const Slide = () => {
    const [index, setIndex] = useState(2)
    const { name, job, image, text } = peoples[index]

    const randomNumber = () =>{
        let randomPeople = Math.floor(Math.random() * peoples.length);
        if(randomPeople === index) {
            randomPeople = index + 1
        }
        setIndex(checkNumber(randomPeople))
    }
    const checkNumber = (number) =>{
        if(number > peoples.length - 1) {
        return 0;
        }
        if(number < 0) {
        return peoples.length - 1
        }
        return number;
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return  checkNumber(newIndex)
        })
    }
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return  checkNumber(newIndex)
        })
    }
  return (
  <article className="review">
    <div className="img-container">
     <img src={image} alt={name} className="person-img" />
    </div>
    <h3 className='author'>{name}</h3>
    <p className='job'>{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
        </button>
    </div>
    <button className='random-btn' onClick={randomNumber}>
            Suprise Me
            </button>
  </article>
  )
}

export default Slide