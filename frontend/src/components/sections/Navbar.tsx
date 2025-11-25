import ToggleThemeButton from "../common/ToggleThemeButton"

const NavbarComponent = () => {
    return (
        <nav className="px-5 py-3 flex justify-end">
            <ToggleThemeButton />
        </nav>
    )
}

export default NavbarComponent