import "./header.css"
import Modal from "../modal/modal"
import { useState } from "react";

export default function Header() {
    const [active, setActive] = useState(false);
    return (
        <div className="header">
            <p className="logo"><span class="title">ЭКО</span>теринбург</p>

            <div className="Contacts">
                <p onClick={() => setActive(true)} id='about-service'>О сервисе</p>
                <p>+7 (343)-233-04-00</p>
            </div>
            <Modal active={active} setActive={setActive}>Сервис для организации процесса грамотной сортировки, подготовки и сдачи мусора в доступных точках, а также направленные на экологическое воспитание пользователей</Modal>
        </div>
    )
}