import css from "./page.module.css"

export default function Footer() {
    return(
        <footer>
            <div className={css.footer}>
                <div className={css.footerWrapper}>
                    <p className={css.footerHead}>MORENT</p>
                    <p className={css.footerText}>Our vision is to provide convenience and help increase your sales business.</p>
                    <div className={css.socialList}>
                        <ul>
                            <li className={css.socialListTitle}>About</li>
                            <li className={css.socialListBtns}>How it works</li>
                            <li className={css.socialListBtns}>Featured</li>
                            <li className={css.socialListBtns}>Partnership</li>
                            <li className={css.socialListBtns}>Business Relation</li>
                        </ul>
                        <ul>
                            <li className={css.socialListTitle}>Community</li>
                            <li className={css.socialListBtns}>Events</li>
                            <li className={css.socialListBtns}>Blog</li>
                            <li className={css.socialListBtns}>Podcast</li>
                            <li className={css.socialListBtns}>Invite a friend</li>
                        </ul>
                        <ul>
                            <li className={css.socialListTitle}>Social</li>
                            <li className={css.socialListBtns}>Discord</li>
                            <li className={css.socialListBtns}>Instagram</li>
                            <li className={css.socialListBtns}>Twitter</li>
                            <li className={css.socialListBtns}>Facebook</li>
                        </ul>
                    </div>
                </div>

                <div className={css.footerBottom}>
                <p className={css.footerCopyright}>©2022 MORENT. All rights reserved</p>
                <p className={css.footerCopyrightTerms}>Privacy & Policy</p>
                <p className={css.footerCopyrightTermsT}>Terms & Condition</p>
                </div>
            </div>
        </footer>
    )
}