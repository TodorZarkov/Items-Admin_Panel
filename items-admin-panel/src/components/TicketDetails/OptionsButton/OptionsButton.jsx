import React, { useEffect, useState } from "react";
import s from "./OptionsButton.module.css"

export function OptionsButton({
    title,
    options,
    defaultName,
    defaultValue,
    onSelect,
    loading
}) {
    let isLoading = false;
    if(loading || defaultName == null || defaultValue == null) {
        isLoading = true;
    }

    const [option, setOption] = useState({ name: defaultName, value: defaultValue })

    const [style, setStyle] = useState({
        dropdownClass: s.dropdown,
        btnClass: s.btn,
        dropdownContentClass: s.dropdownContent,
        optionClass: s.li,
        btnPressed: false,
    });

    useEffect(() => {
        setOption({ name: defaultName, value: defaultValue })
    }, [defaultName, defaultValue])

    function onButtonClick() {
        setStyle((state) => ({
            ...state,
            btnPressed: !state.btnPressed,
            dropdownContentClass: (!state.btnPressed ? `${s.dropdownContent} ${s.pressed}` : s.dropdownContent),
            btnClass: (!state.btnPressed ? `${s.btn} ${s.pressed}` : s.btn)

        }));
    }

    function onOptionClick(optionData) {
        setStyle((state) => ({
            ...state,
            btnPressed: !state.btnPressed,
            dropdownContentClass: s.dropdownContent,
            btnClass: s.btn,
        }));
        setOption(optionData);
        onSelect(optionData);
    }


    return (
        <div className={style.dropdownClass}>
            <div className={(`${( isLoading ? s.frame : "" )}`)}>
                <button
                    disabled={isLoading}
                    className={style.btnClass}
                    type="button"
                    onClick={onButtonClick}
                >{title}{option.name}</button>
            </div>

            <ul role='list' className={style.dropdownContentClass}>
                {
                    options.map(o =>
                        <li
                            key={o.value}
                            className={style.optionClass}
                            onClick={() => onOptionClick(o)}
                        >{o.name}</li>
                    )
                }
            </ul>
        </div>
    );
};