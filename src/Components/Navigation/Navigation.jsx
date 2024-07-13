import React from 'react'
import { navigationMenu } from './NavigationMenu';

const Navigation = () => {
    return (
        <div className='h-screen sticky top-0' >
            <div>
                <div className='py-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32">
                        <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
                    </svg>
                </div>
                <div className='space-y-6'>

                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center'>
                        {item.icon}
                        <p className='text-x1'>{item.title}</p>
                    </div>)}

                </div>

            </div>
        </div>
    );
}

export default Navigation