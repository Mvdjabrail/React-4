import React from "react";
import css from '../component/table.module.css'

export default function Tab(props){
    return(
        <>
        <table>
            <tr>
                <td className={css.id}>{props.id}</td>
                <td className={css.left}>{props.left}</td>
                <td className={css.name}>{props.name}</td>
                <td className={css.price}>{props.price}</td>
                <td className={css.image}><img src={props.image} alt="Картинка" /></td>
            </tr>
        </table>
        </>
    )
}