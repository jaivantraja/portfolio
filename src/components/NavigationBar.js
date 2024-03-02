import '../styles/NavigationBar.css'
const menuItems = [
    { label: 'About', url: '#about' },
    { label: 'Courses', url: '#courses' },
    { label: 'Experience', url: '#experience' },
    { label: 'Education', url: '#education' },
    { label: 'Projects', url: '#projects' },
    { label: 'Publications', url: '#publications' },
    { label: 'Contacts', url: '#contact' },
];
export default function NavigationBar(){
    return(
        <div className={"navigation-bar"}>
            {menuItems.map((item, index) => (
                <div className={"navigation-item"} key={index} >
                    <a href={item.url}>{item.label}</a>
                </div>
            ))}
        </div>
    );
}