module.exports = {
    theme: {
        extend: {
            outline: {
                violet: {value: "{color.interactive._.value}"},
            },
        },
        boxShadow: {
            large: "0 25px 80px 0 rgba(45, 50, 50, 0.4)",
            mid: "0 3px 10px 0 rgba(45, 50, 50, 0.1)",
            "mid-top": "0 -10px 10px -5px rgba(45, 50, 50, 0.1)",
            "mid-bottom": "0 10px 10px -5px rgba(45, 50, 50, 0.1)",
            none: "none",
        },
        ringColor: {
            blue: {value: "{color.interactive._.value}"},
        },
        colors: {/** Populated programatically */},
        fontFamily: {
            sans: {value: "{body.family.value}"},
            mono: {value: "{code.family.value}"},
        },
        fontSize: {
            xxs: ["0.75rem", { letterSpacing: "0.02rem", lineHeight: "1rem" }],
            xs: ["0.813rem", "1rem"],
            s: ["0.875rem", "1rem"],
            m: ["1rem", "1.25rem"],
            l: ["1.125rem", "1.5rem"],
            xl: ["1.5rem", "2rem"],
            xxl: ["2rem", "2.5rem"],
            xxxl: ["3rem", "3.5rem"],
        },
    }
}