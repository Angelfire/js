var fixName = function () {
    /***** Begin repeated code block *****/
    firstLetter = name.substring(0, 1);
    name = firstLetter.toUpperCase() + name.substring(1);
    fullName = fullName + " " + name;
    /***** End repeated code block *****/
};