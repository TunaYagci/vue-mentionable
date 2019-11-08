const dummyShows = [
    {serial: 101, subject: "Homecoming: Season 1"},
    {serial: 102, subject: "Barry: Season 1"},
    {serial: 105, subject: "Killing Eve: Season 1"},
    {serial: 203, subject: "Atlanta: Robbin' Season"},
    {serial: 208, subject: "Cobra Kai"},
    {serial: 234, subject: "GLOW: Season 2"},
    {serial: 239, subject: "The Good Place: Season 3"},
    {serial: 301, subject: "Vida: Season 1"},
    {serial: 302, subject: "Better Call Saul: Season 4"},
    {serial: 303, subject: "Sharp Objects: Miniseries"},
    {serial: 404, subject: "Stranger Things"},
    {serial: 505, subject: "Peaky Blinders"},
    {serial: 606, subject: "Black Mirror"},
    {serial: 707, subject: "Riverdale"},
    {serial: 708, subject: "Unbelievable"},
    {serial: 1002, subject: "Game of Thrones: Shitty final season"},
    {serial: 802, subject: "Sherlock"},
    {serial: 943, subject: "Queer Eye"},
    {serial: 2101, subject: "Doctor Who"},
    {serial: 3101, subject: "When They See Us"},
    {serial: 1401, subject: "Brooklyn Nine-Nie"},
];

let backendPromise = (searchParam) => Promise.resolve(dummyShows.filter(f => {
    return f.serial.toString().startsWith(searchParam) || f.subject.startsWith(searchParam);
}));

export {
    backendPromise
};
