import React from 'react'

//import css
import "./FormLayout.css";

const FormLayout = ({ children }) => {
    return (
        <section className="SignInSection">
            <main className="SignInSectionContent">
                {children}
            </main>
        </section>
    )
}

export default FormLayout