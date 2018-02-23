class SmartCalculator {
    constructor(initialValue) {
        this._value;
        this._stack = [initialValue];
        this.valueOf = function () {
            this.getResult(this._stack);
            this._value = this._stack[0];
            return this._value;
        }
    }

    add(number) {
        this._stack.push('+', number);
        return this;
    }

    subtract(number) {
        this._stack.push('-', number);
        return this;
    }

    multiply(number) {
        this._stack.push('*', number)
        return this;
    }

    devide(number) {
        this._stack.push('/', number);
        return this;
    }

    pow(number) {
        this._stack.push('^', number)
        return this;
    }

    getResult(stack) {
        for (var i = stack.length - 1; i > -1; i--) {
            if (stack.length == 1) return;
            if (stack[i] == '^') {
                var result = Math.pow(stack[i - 1], stack [i + 1])
                stack.splice(i - 1, 3, result);
                i += 2;
            }
        }

        for (i = 0; i < stack.length; i++) {
            if (stack.length == 1) return;
            if (stack [i] == '*') {
                result = stack[i - 1] * stack[i + 1];
                stack.splice(i - 1, 3, result);
                i -= 2;
            } else if (stack [i] == '/') {
                result = stack[i - 1] / stack[i + 1];
                stack.splice(i - 1, 3, result);
                i -= 2;
            }
        }

        for (i = 0; i < stack.length; i++) {
            if (stack.length == 1) return;
            if (stack [i] == '+') {
                result = stack[i - 1] + stack[i + 1];
                stack.splice(i - 1, 3, result);
                i -= 2;
            } else if (stack [i] == '-') {
                result = stack[i - 1] - stack[i + 1];
                stack.splice(i - 1, 3, result);
                i -= 2;
            }
        }
    }
}

module.exports = SmartCalculator;
