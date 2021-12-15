import React from 'react';
import './../../css/login.css';


const handleLogin = async () => {
    try {

        const txtPass = document.getElementById("passIN");
        const txtUser = document.getElementById("userIN");

        const pass = txtPass.value;
        const user = txtUser.value;

        const promesa = await fetch(
            `http://localhost:3000/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mail: user,
                    password: pass,
                }),
            }
        );

        const resultado = await promesa.json();
        
        if (resultado.error === null) {
            console.log("OK!");
        } else {
            console.log("ERROR!");
        }

    } catch (error) {
        console.log(error);
    } finally {
        //Hacer algo?
    }
};

const handleSignUp = async () => {
    try {

        const btnSignUP = document.getElementById("btnSignUP");
        const txtUserUP = document.getElementById("userUP");
        const txtPassUP = document.getElementById("passUP");
        const txtRPassUP = document.getElementById("RpassUP");
        const emailUP = document.getElementById("emailUP");

        const user = txtUserUP.value;
        const pass = txtPassUP.value;
        const Rpass = txtRPassUP.value;
        const email = emailUP.value;

        const promesa = await fetch(
            `http://localhost:3000/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user,
                    mail: email,
                    password: pass,
                }),
            }
        );

        const resultado = await promesa.json();

        console.log(resultado);
        // if (resultado.success === true) {
        //     console.log("OK!");
        // } else {
        //     console.log("ERROR!");
        // }

    } catch (error) {
        console.log(error);
    } finally {
        //Hacer algo?
    }
};


function Home(props) {

    return (
        <>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Login</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Nuevo User?</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label for="userIN" className="label">Username</label>
                                <input id="userIN" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label for="passIN" className="label">Password</label>
                                <input id="passIN" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group" style={{visibility: 'hidden'}}>
                                <input id="check" type="checkbox" className="check" checked />
                                <label for="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input id="btnSignIN" type="submit" className="button" value="Ingresar" onClick={handleLogin} />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Olvidaste el Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label for="userUP" className="label">Username</label>
                                <input id="userUP" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label for="passUP" className="label">Password</label>
                                <input id="passUP" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label for="RpassUP" className="label">Repeat Password</label>
                                <input id="RpassUP" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label for="emailUP" className="label">Email Address</label>
                                <input id="emailUP" type="text" className="input" />
                            </div>
                            <div className="group">
                                <input id="btnSignUP" type="submit" className="button" value="Registrarse" onClick={handleSignUp} />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label for="tab-1">Ya eres usuario?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home