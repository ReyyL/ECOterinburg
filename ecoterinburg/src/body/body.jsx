import "./body.css"
import { useState, useEffect } from "react";
import NewsItem from "../news-item/news-item";
import Modal from "../modal/modal";
import { useRef } from "react";

export default function Body() {
    const [data, setData] = useState();
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const ref = useRef()
    const ref1 = useRef()
    useEffect(() => {
        const getData = async () => {
            const responce = await fetch("http://62.84.123.100/Post/GetPosts", { method: "GET"})
            const data = await responce.json();
            setData(data);
        }
        getData();
        
    },[]);

    const clickHandler = (ref) => {
        ref.current.scrollIntoView({behavior: "smooth"});
    };

    const clickHandler1 = (position) => {
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      };

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 400){
        setVisible(true)
      } 
      else if (scrolled <= 400){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <div className="body">
            <div className="btn-up btn-up_hide" onClick={() => scrollToTop()}></div>
            <div className="upper">
                <div className="body1">
                    
                    <img id="up" src="/img/up.png"/>
                    <p className="left"> Сервис<br/>для изучения и улучшения<br/>экологии в Екатеринбурге</p>
                    <img id="down" src="/img/down.png"/>
                </div>
                <div className="body2">
                    <img id="peop" src="/img/people.png"/>
                </div>
            </div>
            <div className="middle">
                <div className="trashTypes">
                    <div className="trash-box">
                        <div className="trash-button_container">
                            <p id="trash_redirect" onClick={() => clickHandler(ref)}>Перейти <img src="/img/Arrow1.png" id="arrow1"></img></p>
                            
                        </div>
                        <p>Скажем сразу, их более 5</p>
                    </div>
                    <div className="trashText">
                        <p id="types">Виды мусорных отходов</p>
                        <p id="descr"><span className="long-2">Узнайте</span> все о мусорных отходах, чем<br/>они особенны и опасны в нашем мире,<br/>какие материалы относятся к одному<br/>виду отходов</p>
                    </div>
                    <img id="atom" src="/img/atom.png"/>
                </div>
                <div className="trashInstruction">
                <img id="leaf" src="/img/leaves.png"/>
                    <div className="trashText1">
                        <p id="types">Инструкция по подготовке мусора</p>
                        <p id="descr"><span className="long-3">Чем</span> тщательнее сортируется мусор на первом шаге,<br/>тем более эффективной будет его дальнейшая<br/>переработка</p>
                    </div>
                    <div className="ins">
                        <div className="trash-button_container">
                            <p id="trash_redirect" onClick={() => clickHandler(ref1)}>Перейти <img src="/img/Arrow1.png" id="arrow1"></img></p>
                        </div>
                        <p>Важные советы о важном</p>
                    </div>
                </div>
            </div>
            <div className="posts">
                <p id="types">Популярное</p>
                <div className="blogi">
                    {data?.slice(0,3).map(el => <NewsItem text={el.text} date={ el.date} />)}
                </div>
            </div>
            <div className="junkTypes" ref={ref}>
                <p id="junkTitle">Виды отходов</p>
                <div className="junkRaws">
                    <div className="junkCell">
                        <div className="junkPic">
                            <div className="junkContainer">
                                <p id="junkRedirect">Макулатура</p>
                            </div>
                        </div>
                        <ul>
                            <li>Книжная, журнальная, газетная продукция</li>
                            <li>Тетради</li>
                            <li>Записные книжки</li>
                            <li>Блокноты</li>
                        </ul>
                    </div>
                    <div className="junkCell">
                        <div className="junkPic1">
                            <div className="junkContainer">
                                <p id="junkRedirect">Крупногабаритные<br/>материалы</p>
                            </div>
                        </div>
                        <ul>
                            <li>Объемная мебель</li>
                            <li>Отходы после строительства</li>
                            <li>небольшие транспортные средства</li>
                            <li>Бытовая техника разных габаритов</li>
                            <li>Пиломатериалы</li>
                            <li>Сантехника</li>
                            <li>Электрические приборы</li>
                        </ul>
                    </div>
                    <div className="junkCell">
                        <div className="junkPic2">
                            <div className="junkContainer">
                                <p id="junkRedirect">Органические<br/>отходы</p>
                            </div>
                        </div>
                        <ul>
                            <li>пищевые отходы</li>
                            <li>остатки овощей и фруктов</li>
                            <li>яичная скорлупа</li>
                            <li>кофейная и чайная гуща</li>
                            <li>отходы производства кормов для <br/>домашних животных, навоз скота<br/>и птичий помет</li>
                            <li>увядшие цветы и горшечные растения</li>
                        </ul>
                    </div>
                </div>
                <div className="junkRaws">
                    <div className="junkCell">
                        <div className="junkPic3">
                            <div className="junkContainer">
                                <p id="junkRedirect">Пластик</p>
                            </div>
                        </div>
                        <ul>
                            <li>бутылки из-под воды и других напитков</li> 
                            <li>белые бутылки<br/>из-под молочных продуктов</li>
                            <li>бутылки из-под масла</li>
                            <li>упаковка прозрачная от косметических,<br/>моющих и чистящих средств<br/>без дозаторов</li>
                            <li>одноразовая посуда, подложки</li>
                        </ul>
                    </div>
                    <div className="junkCell">
                        <div className="junkPic4">
                            <div className="junkContainer">
                                <p id="junkRedirect">Резина</p>
                            </div>
                        </div>
                        <ul>
                            <li>конвейерные ленты</li>
                            <li>приводные ремни</li>
                            <li>формовые изделия, товарная резина</li>
                            <li>прорезиненная ткань</li>
                            <li>шланги</li>
                            <li>техническая пластина</li>
                        </ul>
                    </div>
                    <div className="junkCell">
                        <div className="junkPic5">
                            <div className="junkContainer">
                                <p id="junkRedirect">Кожа</p>
                            </div>
                        </div>
                        <ul>
                            <li>любые кожаные изделия<br/>(обувь, сумки, ремни, мебельная обивка)</li>
                        </ul>
                    </div>
                </div>
                <div className="junkRaws">
                    <div className="junkCell">
                        <div className="junkPic6">
                            <div className="junkContainer">
                                <p id="junkRedirect">Металл</p>
                            </div>
                        </div>
                        <ul>
                            <li>Конструкции из стали</li>
                            <li>Оборудование и инструменты</li>
                            <li>Автомобили, запчасти</li>
                            <li>Металлическая упаковка</li>
                            <li>отходы после раскроя металла</li>
                            <li>Вышедшие из строя аккумуляторы</li>
                            <li>Провода, кабель</li>
                        </ul>
                    </div>
                    <div className="junkCell">
                        <div className="junkPic7">
                            <div className="junkContainer">
                                <p id="junkRedirect">Текстиль</p>
                            </div>
                        </div>
                        <ul>
                            <li>изношенная спецодежда</li>
                            <li>скатерть</li>
                            <li>покрывала</li>
                            <li>постельное белье</li>
                            <li>шторы, гардины</li>
                        </ul>
                    </div>
                    <div className="junkCell">
                        <div className="junkPic8">
                            <div className="junkContainer">
                                <p id="junkRedirect">Стекло</p>
                            </div>
                        </div>
                        <ul>
                            <li>бокалы и стопки для алкогольных напитков</li>
                            <li>лабораторная прозрачная посуда</li>
                            <li>листовое строительное стекло, которое<br/>применяется в строительстве,<br/>остеклянении окон</li>
                            <li>банки, бутылки и флаконы</li>
                        </ul>
                    </div>
                </div>
                <div className="junkRaws">
                    <div className="junkCell">
                        <div className="junkPic9">
                            <div className="junkContainer">
                                <p id="junkRedirect">Дерево</p>
                            </div>
                        </div>
                        <ul>
                            <li>Отходы, остающиеся после<br/>обработки дерева: рейки, стружка,<br/>опилки, древесная пыль и т.п.</li>
                            <li>отходы из крон дерева</li>
                            <li>отходы из ствола</li>
                            <li>мусор из коры</li>
                            <li>гниль древесная</li>
                        </ul>
                    </div>
                    <div className="recycle">
                        <img src="/img/recycle.png" id="recycle"></img>
                        <p id="future">Чистое будущее<br/>—<br/>в чистом настоящем</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="junkTypes"  ref={ref1}>
                <p id="junkTitle">Инструкция по подготовке мусора</p>
                <div><p className="number">1 &nbsp;</p><p className="step"> Что собирать?</p></div>
                <div className="instRaws">
                    <div className="instCell">
                        <div className="instPic">
                            <div className="junkContainer">
                                <p id="junkRedirect">Макулатура</p>
                            </div>
                        </div>
                        <p className="subtitle"><span id="green">Нужно</span> - освободить от лишнего. </p>
                        <div>
                            <img id="cross" src="/img/cross.png"></img>
                            <p className="description">кассовые чеки, деньги, карточки на метро,<br/>салфетки, пачки от сигарет, грязная бумага </p>
                        </div>
                        <div>
                            <img id="tick" src="/img/tick.png"></img>
                            <p className="description">журналы, газеты, книги, картон,<br/>белая бумага, бумага из шредеров,<br/>бумажная упаковка разных видов,<br/>листовки, буклеты</p>
                        </div>
                    </div>
                    <div className="instCell">
                        <div className="instPic1">
                            <div className="junkContainer">
                                <p id="junkRedirect">Стекло</p>
                            </div>
                        </div>
                        <p className="subtitle"><span id="green">Нужно</span> - сполоснуть от содержимого.<br/> По возможности снять крышечки, <br/>дозаторы и колечки на горлышке.<br/> Битое стекло желательно сложить<br/> в какую-либо емкость.</p>
                    </div>
                    <div className="instCell">
                        <div className="instPic2">
                            <div className="junkContainer">
                                <p id="junkRedirect">Металл</p>
                            </div>
                        </div>
                        <p className="subtitle"><span id="green">Нужно</span> - сполоснуть от содержимого и<br/>сплющить - алюминиевые банки от <br/>напитков, жестяные банки от еды и<br/> напитков.<br/>Отделить черные металлы от<br/> цветных.</p>
                    </div>
                    <div className="instCell">
                        <div className="instPic3">
                            <div className="junkContainer">
                                <p id="junkRedirect">Пластик</p>
                            </div>
                        </div>
                        <p className="subtitle"><span id="green">Нужно</span> - приносить в пункты только с <br/>маркировкой.<br/> Ополосните, чтобы удалить остатки<br/> еды, косметики, бытовой химии и т.д.<br/>Сделайте упаковку компактнее, <br/>снимите всё лишнее.</p>
                    </div>
                </div>
                <div id="second"><p className="number">2 &nbsp;</p><p className="step"> Во что собирать?</p></div>
                <div className="secondStep">
                    <p>Вы можете разделять отходы всего на 2 вида - <span id="bold">перерабатываемые</span> и <span id="bold">неперерабатываемые</span>.<br/>А потом разделять <span id="bold">перерабатываемые</span> уже на пункте приема, которые можете посмотреть в нашем мобильном приложении.<br/>
Чем меньше упаковки вы принесете домой, тем меньше мусора образуется. <br/>
Избегайте упаковки, состоящей из нескольких разных материалов — такую трудно или даже невозможно переработать.<br/></p>
                    <ul>
                        <li id="sec">Пластик можно складывать в полиэтиленовые пакеты</li>
                        <li id="sec">Бумагу - в бумажные/крафтовые пакеты</li>
                    </ul>
                </div>
                <div><p className="number">3 &nbsp;</p><p className="step"> Куда сдавать?</p></div>
                <div className="thirdStep">
                    <div className="thirdText">
                        <div className="third">
                            <img id="point" src="/img/point.png"></img>
                            <p id="sec"> Множество пунктов приемов вторсырья вы<br/> можете найти во вкладке “Карта” в <br/>мобильном приложении.</p>
                        </div>
                        <div className="third">
                            <img id="mark" src="/img/mark.png"></img>
                            <p id="sec"> Также есть регулярные и разовые акции по<br/>приему вторсырья.</p>
                        </div>
                        <div className="third">
                            <img id="person" src="/img/person.png"></img>
                            <p id="sec"> Для удобства скооперируйтесь с друзьями <br/>или соседями и вместе возите отходы  или <br/>поищите попутчиков в соц. сетях</p>
                        </div>
                    </div>
                    <div className="thirdPic">
                        <img id="bigEco" src="/img/bigEco.png"></img>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p><a href="https://drive.google.com/file/d/1xdFr7f4V3ZbkLzgDD8fm98Bt6iJcxS8I/view"  target="_blank" id="greenBottom">Скачать</a> приложение и узнать больше<br/>об экологии в Екатеринбурге</p>
            </div>
        </div>
    )
}