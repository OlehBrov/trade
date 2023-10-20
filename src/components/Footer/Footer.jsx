import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import tgbannerImage from "../../assets/image/tgbanner.png";
import contactsImage from "../../assets/image/contacts.png";
import Ctrs from "../../assets/image/ctrs.png";

import {
  selectPhones,
  selectSocialMedia,
  selectTimeWork,
} from "../../redux/ourSettings/ourSettingsSelectors";

export default function Footer() {
  const timeWork = useSelector(selectTimeWork);
  const phones = useSelector(selectPhones);
  const { facebook, instagram, telegram, date, email, siteName } =
    useSelector(selectSocialMedia);

  return (
    <footer className="footer">
      <div className="footer__box-1">
        <div className="footer__body">
          <div className="footer__text">
            <h1>
              Подпишись на наш <br /> телеграм канал
            </h1>
            <span>Узнавай все новости первым</span>

            <Link to={telegram}>
              <button>Подписатся</button>
            </Link>
          </div>
          <div className="footer__bg">
            <img src={tgbannerImage} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__box-2">
        <div className="footer__body">
          <div className="footer__container">
            <h1>{siteName}</h1>
            <span>© {date} Все права защищены</span>
            <div className="footer__images">
              <img src={Ctrs} alt="" />
            </div>
          </div>
          <div className="footer__container">
            <h2>Соцсети</h2>
            <div className="footer__images">
              <img src={contactsImage} alt="" />
            </div>
          </div>
          <div className="footer__container">
            <h2>Время работы</h2>
            <ul>
              {timeWork?.map((time, id) => (
                <li key={id}>{time}</li>
              ))}
            </ul>
          </div>
          <div className="footer__container">
            <h2>Каталог</h2>
            <ul>
              <li>Смартфоны и телефоны</li>
              <li>Телевизоры, аудио и фото</li>
              <li>Бытовая техника</li>
              <li>Смартфоны и телефоны</li>
              <li>Телевизоры, аудио и фото</li>
              <li>Бытовая техника</li>
              <li>Смартфоны и телефоны</li>
              <li>Телевизоры, аудио и фото</li>
              <li>Бытовая техника</li>
            </ul>
          </div>
          <div className="footer__container">
            <h2>Навигация</h2>
            <ul>
              <li>Корпоративным клиентам</li>
              <li>Про нас</li>
              <li>Способы доставки</li>
              <li>Гарантия</li>
              <li>Возврат и обмен</li>
              <li>Распродажа</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="footer__container">
            <h2>Контакты</h2>
            <ul>
              {phones?.map((phone, id) => (
                <li key={id}>{phone}</li>
              ))}
              <li>{email}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
