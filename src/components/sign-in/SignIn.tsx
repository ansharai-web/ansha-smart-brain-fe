import React, {useContext} from 'react'
import {customFetch} from '../../utils'
import {useHandleChangeHook} from '../../hooks/handleChangeHook'
import {UserDetailsContext} from '../../App'

interface ISignIn {}

function SignIn() {
    const {fields, handleFields} = useHandleChangeHook({email:'',password:''})
    const {email,password} = fields
    const {loadUser,route,onRouteChange} = useContext(UserDetailsContext)

    function handleSubmit() {
        customFetch('signin', 'POST', undefined, {email, password}).then((u: any) => {
            if (typeof u == 'object') {
                loadUser(u)
            }
        })
    }

    return (
        <>
            {route === 'signin' ?
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                   type="email"
                                   value={email}
                                   onChange={handleFields}
                                   name="email" id="email"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                   value={password}
                                   onChange={handleFields}
                                   type="password" name="password" id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               type="submit"
                               onClick={handleSubmit}
                               value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db" onClick={() => onRouteChange('register')}>Register</p>
                    </div>
                </div>
            </main>
        </article>
            : undefined
            }

        </>
    )
}

export {SignIn}
