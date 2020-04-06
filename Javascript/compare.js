function parseUserInput() {
    let input1Textarea = document.getElementById("input1");
    let input2Textarea = document.getElementById("input2");

    let input1 = input1Textarea.value;
    let input2 = input2Textarea.value;

    let alignment = compare(input1, input2);
    console.log(alignment);
}

function compare(input1, input2) {

    let sequence1 = cleanRNASequence(input1);
    let sequence2 = cleanRNASequence(input2);

    let needlemanWunsch = new NeedlemanWunsch();
    let needlemanAlignment = needlemanWunsch.align(sequence1, sequence2);

    //let hirschbergsAlgorithm = new HirschbergsAlgorithm();
    //let hirschbergAlignment = hirschbergsAlgorithm.align(sequence1, sequence2);

    //let alignmentAlgorithm = new AlignmentAlgorithmm();
    //let alignment = alignmentAlgorithm.align(sequence1, sequence2);
    return needlemanAlignment;
}

function cleanRNASequence(sequence) {
    let regExpressionNumbers = /([0-9])/g;
    let regExpressionWhitespaces = /\s+/g;

    let cleanSequence = sequence.replace(regExpressionNumbers, "");
    cleanSequence = cleanSequence.replace(regExpressionWhitespaces, "");

    console.log(cleanSequence);
    return cleanSequence;
}