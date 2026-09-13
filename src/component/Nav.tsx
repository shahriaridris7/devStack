
import logo from "../assets/logo-text.png"
const  Nav = () => {
    return (
    <nav className='sticky top-0 z-50 bg-base-100 my-4'>
        <div className=' flex justify-between items-center container mx-auto'>
                
        <div ><img src={logo} alt="" /></div>
        
        <div className='hidden lg:block'>
            <ul className='flex justify-between text-sm lg:text-base gap:1 md: gap-2 lg:gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Products</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className=' flex justify-between  items-center text-sm lg:text-base gap:1 md: gap-2 lg:gap-4'>
            <h2>Sign in</h2>
            <button className="btn  btn-secondary btn-sm rounded-2xl text-base">Sign up</button>
        </div>
        
        </div>
     
     
  <div className="divider mt-0"></div>
 

    </nav>
            
        
    );
};

export default Nav;