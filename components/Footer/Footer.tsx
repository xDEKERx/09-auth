import Link from 'next/link'
import css from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <p>&copy; {new Date().getFullYear()} NoteHub. All rights reserved.</p>
                <div className={css.wrap}>
                    <p>Developer: Dmytro Solonko</p>
                    <p>
                        Contact us:
                        <Link href='mailto:viktoryanenko11@gmail.com'> prostodeker@gmail.com</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}