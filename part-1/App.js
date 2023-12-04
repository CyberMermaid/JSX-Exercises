const App = () => {
   return (
   <div>
        <FirstComponent/> 
        <NamedComponent name="Maureen"/>
    </div> 
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))