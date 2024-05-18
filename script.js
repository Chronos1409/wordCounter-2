let skipAdjectives = false;
let skipAdverbs = false;
const adjectives = [
    "adorable", "adventurous", "aggressive", "agreeable", "alert", "alive", "amused", 
    "angry", "annoyed", "annoying", "anxious", "arrogant", "ashamed", "attractive", 
    "average", "awful", "bad", "beautiful", "better", "bewildered", "bored", "boring", 
    "brave", "breakable", "bright", "busy", "calm", "careful", "cautious", "charming", 
    "cheerful", "clean", "clear", "clever", "clumsy", "colorful", "combative", 
    "comfortable", "concerned", "condemned", "confused", "cooperative", "courageous", 
    "crazy", "creepy", "crowded", "cruel", "curious", "cute", "dangerous", "dark", 
    "dead", "defeated", "defiant", "delightful", "depressed", "determined", "different", 
    "difficult", "disgusted", "distinct", "disturbed", "dizzy", "doubtful", "drab", 
    "dull", "eager", "easy", "elated", "elegant", "embarrassed", "enchanting", 
    "encouraging", "energetic", "enthusiastic", "envious", "evil", "excited", 
    "expensive", "exuberant", "fair", "faithful", "famous", "fancy", "fantastic", 
    "fierce", "filthy", "fine", "foolish", "fragile", "frail", "frantic", "friendly", 
    "frightened", "funny", "gentle", "gifted", "glamorous", "gleaming", "glorious", 
    "good", "gorgeous", "graceful", "grieving", "grotesque", "grumpy", "handsome", 
    "happy", "healthy", "helpful", "helpless", "hilarious", "horrible", "hungry", 
    "hurt", "important", "impossible", "inexpensive", "innocent", "inquisitive", 
    "itchy", "jealous", "jittery", "jolly", "joyous", "kind", "lazy", "light", 
    "lively", "lonely", "long", "lovely", "lucky", "magnificent", "misty", "modern", 
    "motionless", "muddy", "mushy", "mysterious", "nasty", "naughty", "nervous", 
    "nice", "nutty", "obedient", "obnoxious", "odd", "old-fashioned", "outrageous", 
    "outstanding", "panicky", "perfect", "pleasant", "poised", "poor", "powerful", 
    "precious", "prickly", "proud", "puzzled", "quaint", "real", "relieved", 
    "repulsive", "rich", "scary", "selfish", "shiny", "shy", "silly", "sleepy", 
    "smiling", "smoggy", "sore", "sparkling", "splendid", "spotless", "stormy", 
    "strange", "stupid", "successful", "super", "talented", "tame", "tender", 
    "tense", "terrible", "thankful", "thoughtful", "thoughtless", "tired", 
    "tough", "troubled", "ugliest", "ugly", "uninterested", "unsightly", "unusual", 
    "upset", "uptight", "vast", "victorious", "vivacious", "wandering", "weary", 
    "wicked", "wide-eyed", "wild", "witty", "worried", "worrisome", "wrong", 
    "zany", "zealous"
];

const adverbs = [
    "abnormally", "absentmindedly", "accidentally", "acidly", "actually", 
    "adventurously", "afterwards", "almost", "always", "angrily", "annually", 
    "anxiously", "arrogantly", "awkwardly", "badly", "bashfully", "beautifully", 
    "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", 
    "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", 
    "carefully", "carelessly", "cautiously", "certainly", "cheerfully", 
    "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", 
    "continually", "coolly", "crazily", "crossly", "cruelly", "curiously", 
    "daily", "daintily", "dearly", "deceivingly", "delightfully", "deeply", 
    "defiantly", "deliberately", "doubtfully", "dreamily", "easily", "elegantly", 
    "energetically", "enormously", "enthusiastically", "equally", "especially", 
    "even", "evenly", "eventually", "exactly", "excitedly", "extremely", 
    "fairly", "faithfully", "famously", "far", "fast", "fatally", "ferociously", 
    "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", 
    "frantically", "freely", "frenetically", "frightfully", "fully", 
    "furiously", "generally", "generously", "gently", "gladly", "gleefully", 
    "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", 
    "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", 
    "hopelessly", "hourly", "hungrily", "immediately", "innocently", 
    "inquisitively", "instantly", "intensely", "intently", "interestingly", 
    "inwardly", "irritably", "jaggedly", "jealously", "jovially", "joyfully", 
    "joyously", "jubilantly", "judgementally", "justly", "keenly", "kiddingly", 
    "kindheartedly", "kindly", "kissingly", "knavishly", "knottily", "knowingly", 
    "knowledgeably", "kookily", "lazily", "less", "lightly", "likely", "limply", 
    "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", 
    "madly", "majestically", "meaningfully", "mechanically", "merrily", 
    "miserably", "mockingly", "monthly", "more", "mortally", "mostly", "mysteriously", 
    "naturally", "nearly", "neatly", "nervously", "never", "nicely", "noisily", 
    "obediently", "obnoxiously", "oddly", "offensively", "officially", "often", 
    "only", "openly", "optimistically", "overconfidently", "owlishly", 
    "painfully", "partially", "patiently", "perfectly", "physically", 
    "playfully", "politely", "poorly", "positively", "potentially", 
    "powerfully", "promptly", "properly", "punctually", "quaintly", 
    "quarrelsomely", "queasily", "questionably", "quickly", "quietly", 
    "quizzically", "randomly", "rapidly", "rarely", "readily", "really", 
    "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", 
    "reproachfully", "restfully", "righteously", "rightfully", "rigidly", 
    "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", 
    "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", 
    "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", 
    "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", 
    "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", 
    "successfully", "suddenly", "supposedly", "surprisingly", "suspiciously", 
    "sweetly", "swiftly", "sympathetically", "tenderly", "tensely", 
    "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", 
    "tomorrow", "too", "tremendously", "triumphantly", "truly", "truthfully", 
    "unexpectedly", "unfortunately", "unnaturally", "unnecessarily", 
    "upbeat", "upliftingly", "upright", "upside-down", "upward", "urgently", 
    "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", 
    "vastly", "verbally", "very", "viciously", "victoriously", "violently", 
    "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "well", 
    "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", 
    "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", 
    "yesterday", "youthfully", "zealously", "zestfully", "zestily"
];

function toggleAdjectives() {
    skipAdjectives = !skipAdjectives;
    document.getElementById('skipAdjectives').innerText = skipAdjectives ? 'ON' : 'OFF';
    countWords();
}

function toggleAdverbs() {
    skipAdverbs = !skipAdverbs;
    document.getElementById('skipAdverbs').innerText = skipAdverbs ? 'ON' : 'OFF';
    countWords();
}

function countWords() {
    const text = document.getElementById('textBox').value;
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);

    if (skipAdjectives) {
        words = words.filter(word => !adjectives.includes(word.toLowerCase()));
    }

    if (skipAdverbs) {
        words = words.filter(word => !adverbs.includes(word.toLowerCase()));
    }

    document.getElementById('wordCount').innerText = words.length;
}