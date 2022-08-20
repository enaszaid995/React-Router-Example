import styles from './MainNavigation.module.css';
import { NavLink } from "react-router-dom";

const MainNavigation =()=>{
    return  <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav} >
            <ul>
                <li>
                    <NavLink to='/allQuouts' className={(navData)=>navData.isActive?styles.active:''}>
                        All Quout
                    </NavLink>
                </li>

                <li>
                    <NavLink to ='/addQuouts' className={(navData)=>navData.isActive?styles.active:''}>
                        Add Quout
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    

}
export default MainNavigation;