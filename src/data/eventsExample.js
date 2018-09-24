module.exports = [
    {
        example: [
            "class SomeTest extends React.Component{",
            "  handleStartClick = () => {",
            "    console.log( 'Start clicked!' );",
            "  }",
            " render(){",
            "   return (",
            "     <div className='user'>",
            "       <button onClick={this.handleStartClick}>Start!</button>",
            "     </div>",
            "    );",
            "  }",
            "}"
        ]
    },
    {
        name: `Jak pamiętasz z zajęć o DOM i jQuery, this jest dynamicznie zmieniany w callbackach zdarzeń. ${"\n\n"}Oznacza to, że nie masz dostępu do obiektu swojej klasy, a w konsekwencji – nie masz jak odwołać się do komponentu (nie użyjesz props, state itd.) ${"\n\n"}Za chwilę użyjemy dwóch metod, które znasz z zajęć o ES6, które pozwolą na pozbycie się tego problemu.`,
        example: [
            "'keypress' – wciśnięty klawisz (klawisze",
            "specjalne; w React: 'onKeyPress')",
            "'keydown' – wciśnięty klawisz",
            "(w React: 'onKeyDown)'",
            "'keyup' – zwolniony klawisz",
            "(w React: 'onKeyUp')"
        ]
    },
    {
        name: "Form Events",
        example: [
            "'submit' – kliknięty submit",
            "(w React: 'onSubmit')",
            "'change' – zmiana elementu",
            "(w React: 'onChange')",
            "'focus' – 'focus (skupienie) na elemencie",
            "(w React: 'onFocus')",
            "'blur' – utrata zdarzenia focus",
            "(w React: 'onBlur')"
        ]
    },
    {
        name: "Document/Window Events",
        example: [
            "'load' – załadowanie dokumentu HTML wraz z",
            "wszystkimi zasobami",
            "(w React: 'onLoad')"
        ]
    }
];
