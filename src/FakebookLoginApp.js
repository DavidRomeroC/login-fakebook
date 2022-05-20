export const FakebookLoginApp = () => {
    return (
        <div className="login__main-container">
            <div className="login__brand-container">
                <h1>fakebook</h1>
                <p>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</p>
            </div>
            <div className="login_form-container">
                <form>
                    <input type="email" placeholder="Correo eléctronico o número de teléfono" />
                    <input type="password" placeholder="Contraseña" />
                    <button className="log">Entrar</button>
                    <a href="index.html">¿Has olvidado la contraseña?</a>
                    <hr />
                    <button className="register">Crear cuenta nueva</button>
                </form>
                <p><strong>Crea una página</strong> para un famoso, marca o empresa.</p>
            </div>
        </div>
    )
}
