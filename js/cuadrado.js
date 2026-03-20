let expr = '';

function updateScreen() {
    document.getElementById('screen').textContent = expr || '0';
}

function appendNumber(num) {
    expr += num;
    updateScreen();
}

function appendOp(op) {
    if(expr === '' && op !== '-') return;
    const last = expr.slice(-1);
    if(['+','-','*','/'].includes(last)){
        expr = expr.slice(0,-1) + op;
    } else {
        expr += op;
    }
    updateScreen();
}

function clearScreen() {
    expr = '';
    updateScreen();
}

function backspace() {
    expr = expr.slice(0,-1);
    updateScreen();
}

function calculate() {
    try {
        const result = Function('return ' + expr)();
        expr = result.toString();
        updateScreen();
    } catch {
        expr = '';
        updateScreen();
    }
}