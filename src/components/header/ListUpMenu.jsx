import styles from "./ListUpMenu.module.css"
//
function ListUpMenu() {
  const namesLiMenuUp = ["File", "Home", "Insert", "Draw",
     "Page Layout", "Formulas", "Data", "Review", "View", 
     "Developer", "Help", "Power Pivot", "Shape Format"
    ]
  return (
    <>
    <ul className={styles.UL_UpMenuClass}>
        {namesLiMenuUp.map(names => (
          <li className={styles.LiUpMenuClass}>{names}</li>
        ))}
    </ul>
    </>
  )
}
//
export default ListUpMenu