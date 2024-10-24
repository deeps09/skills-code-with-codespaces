function skillsMember() {}
skillsMember.prototype = new skills();
skillsMember.prototype.constructor = skillsMember;
skillsMember.prototype.getSkills = function() {
    return "Skills for member";
}