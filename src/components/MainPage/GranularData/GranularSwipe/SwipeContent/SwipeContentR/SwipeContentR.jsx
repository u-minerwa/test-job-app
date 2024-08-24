import React from "react";
import classes from './SwipeContentR.module.css';

function SwipeContentR() {
    return (
        <div className={classes.contentR}>
            <div className={classes.cifra}>2</div>
            <div className={classes.textOnCifra}>Преобразование данных</div>
            <div className={classes.textStrelka}>
                <div className={classes.text}>Ежемесячные</div>
                <div className={classes.strelka}>
                    <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 2.4641C28 0.924501 29.6667 -0.0377486 31 0.732052L40 5.9282C41.3333 6.698 41.3333 8.62251 40 9.39231L31 14.5885C29.6667 15.3583 28 14.396 28 12.8564V2.4641Z" fill="#E01E2E" />
                        <path d="M0 6.66016C0 5.55559 0.895431 4.66016 2 4.66016H28V10.6602H2C0.895431 10.6602 0 9.76473 0 8.66016V6.66016Z" fill="#E01E2E" />
                    </svg>
                </div>
                <div className={classes.text}>Еженедельные</div>
            </div>
            <div className={classes.textStrelka2}>
                <div className={classes.text}>Сырые данные</div>
                <div className={classes.strelka2}>
                    <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 2.4641C28 0.924501 29.6667 -0.0377486 31 0.732052L40 5.9282C41.3333 6.698 41.3333 8.62251 40 9.39231L31 14.5885C29.6667 15.3583 28 14.396 28 12.8564V2.4641Z" fill="#E01E2E" />
                        <path d="M0 6.66016C0 5.55559 0.895431 4.66016 2 4.66016H28V10.6602H2C0.895431 10.6602 0 9.76473 0 8.66016V6.66016Z" fill="#E01E2E" />
                    </svg>
                </div>
                <div className={classes.text}>Промо/регулярные</div>
            </div>
            <div className={classes.textStrelka3}>
                <div className={classes.text}>Промо/регулярные</div>
                <div className={classes.strelka3}>
                    <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 2.4641C28 0.924501 29.6667 -0.0377486 31 0.732052L40 5.9282C41.3333 6.698 41.3333 8.62251 40 9.39231L31 14.5885C29.6667 15.3583 28 14.396 28 12.8564V2.4641Z" fill="#E01E2E" />
                        <path d="M0 6.66016C0 5.55559 0.895431 4.66016 2 4.66016H28V10.6602H2C0.895431 10.6602 0 9.76473 0 8.66016V6.66016Z" fill="#E01E2E" />
                    </svg>
                </div>
                <div className={classes.text}>Базовые/Инкрементальные</div>
            </div>
            <div className={classes.textStrelka4}>
                <div className={classes.text}>Дистрибуция</div>
                <div className={classes.strelka4}>
                    <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 2.4641C28 0.924501 29.6667 -0.0377486 31 0.732052L40 5.9282C41.3333 6.698 41.3333 8.62251 40 9.39231L31 14.5885C29.6667 15.3583 28 14.396 28 12.8564V2.4641Z" fill="#E01E2E" />
                        <path d="M0 6.66016C0 5.55559 0.895431 4.66016 2 4.66016H28V10.6602H2C0.895431 10.6602 0 9.76473 0 8.66016V6.66016Z" fill="#E01E2E" />
                    </svg>
                </div>
                <div className={classes.text}>Конкретное окружение</div>
            </div>
        </div>
    )
}

export default SwipeContentR;

