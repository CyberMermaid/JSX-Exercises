// Create an *App* component that renders at least three tweets.
const App = () => {
    return (
        <div>
            <Tweet 
            username="missmulrooney"
            name="Kristen Mulrooney"
            date="Nov 28, 2023"
            msg="My 4-year-old said she's scared to become a grown up because she doesn't know how to do the gas station. She has no idea how real she's being right now."
            />
            <Tweet 
             username="KatieDeal99"
             name="Katie D"
             date="Nov 30, 2023"
             msg="There’s only one type of person that buys a child’s drum set, and that person is revenge gifting"
            />
            <Tweet 
             username="mikescollins"
             name="Mike Scollins"
             date="Nov 29, 2023"
             msg="Retropolis Article- The suprising dating life of Henry Kissinger, a West Wing 'Playboy'. Reply: Probably not the body count we should be focusing on."
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root") )