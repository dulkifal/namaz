import React from "react";
import { StyleSheet,Text, TextInput, View , Button} from 'react-native';


import { useEffect, useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import fuzzySearch from 'fuzzysearch'

//import "./Select.scss";
import { AiOutlineClose } from "react-icons/ai";





export default function SSelect(props) {
  let {
    opts = [],
    label,
    selected,
    onChange = () => {},
    placeholder = "search",
  } = props;
  const [Open, setOpen] = useState(false);
  const ref = useRef(null);

  const [Selected, setSelected] = useState(selected);
  const [Query, setQuery] = useState(null)
 // const [InputVal, setInputVal] = useState()



  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);


  useEffect(() => {
    if (Selected) {
      onChange(
        Selected,
        opts.findIndex((e) => e.id == Selected)
      );
    } else {
      onChange(null, null);
    }
  }, [Selected]);


  function FuzziedOpts (){
    if(Query){
     return opts.filter(e=>fuzzySearch(Query.toLocaleLowerCase(),e.text.toLocaleLowerCase()))
    }else{
      return opts
    }
  }

  return (
    <View {...props} ref={ref} className="Select">
      <Text>{label}</Text>
      <View
        onClick={(e) => {
          setOpen(!Open);
        }}
        className={`act ${Open && "acted"}`}
      >
  
          <input
            value={Open?Query:opts.find(e=>e.id==Selected)&&opts.find(e=>e.id==Selected).text}
            placeholder={placeholder}
            type="text"
            onInput={(e)=>{
              setQuery(e.target.value)
            }}
          />
        
        <i>
        {Selected ? (
            <AiOutlineClose
              onClick={() => {
                setSelected(null);
              }}
            />
          ) : (
            <BiChevronDown />
          )}
        </i>
      </View>
      {Open && (
        <View className="SelArea">
          {FuzziedOpts().map((e) => (
            <View
              key={e.id}
              onClick={() => {
                setSelected(e.id);
                setOpen(false);
              }}
              className="opt"
            >
              {e.text}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
