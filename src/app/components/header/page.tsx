import css from "./page.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.wrapper}>
                <p className={css.logo}>MORENT</p>
            </div>
        </div>
    );
}
