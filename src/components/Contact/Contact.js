import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'
const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" />
            <div className={styles.center}>
                <form action="https://formspree.io/kaede.nakashima@yahoo.com"
  method="POST" className={styles.form}>
                    <div>
                        <label htmlfor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className={styles.formControl} placeholder="john smith"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className={styles.formControl} placeholder="email@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows="10" 
                            className={styles.formControl} placeholder="hello there"
                        />
                    </div>
                    <div>
                        <input type="submit" value="submit here" className={styles.submit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
