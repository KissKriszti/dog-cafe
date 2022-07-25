import ScrollIntoView from 'react-scroll-into-view';

export default function Menu({ showMenu }) {
    return (
        <ul className={showMenu ? 'verMenu' : 'horMenu'}>
            <ScrollIntoView selector='#home'>
                <li>Home</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#about">
                <li>About</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#menu">
                <li>Menu</li>
            </ScrollIntoView>
            <ScrollIntoView selector='#contact'>
                <li>Contact</li>
            </ScrollIntoView>
        </ul>
    )
};