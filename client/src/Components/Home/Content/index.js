import { TopNav } from '../../Navbar'

export const PageContent = () => {
    return(
        <div>
            <section>
                <TopNav />
                <hr className='hr_nav' />
            </section>
            <div>
                <h1>Hello World</h1>
            </div>
        </div>
    )
}