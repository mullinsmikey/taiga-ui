import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiTransactionAutofillName} from '@taiga-ui/cdk';
import {TuiDecimalT} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-number',
    templateUrl: './input-number.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputNumberComponent),
        },
    ],
})
export class ExampleTuiInputNumberComponent extends AbstractExampleTuiControl {
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly minVariants: readonly number[] = [-Infinity, -500, 5, 25];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [Infinity, 10, 500];

    max = this.maxVariants[0];

    readonly example1: FrontEndExample = {
        HTML: example1Html,
        TypeScript: example1Ts,
    };

    readonly example2: FrontEndExample = {
        HTML: example2Html,
        TypeScript: example2Ts,
    };

    readonly example3: FrontEndExample = {
        HTML: example3Html,
        TypeScript: example3Ts,
    };

    readonly example4: FrontEndExample = {
        HTML: example4Html,
        LESS: example4Less,
        TypeScript: example4Ts,
    };

    readonly autocompleteVariants = ['off', 'transaction-amount'];

    autocomplete: TuiTransactionAutofillName | null = null;

    readonly decimalVariants: readonly TuiDecimalT[] = ['not-zero', 'always', 'never'];

    decimal = this.decimalVariants[0];

    cleaner = false;

    readonly precisionVariants: readonly number[] = [2, 3, 4];

    precision = this.precisionVariants[0];

    readonly postfixVariants: readonly string[] = ['', '$', 'GBP'];

    prefix = this.postfixVariants[0];

    postfix = this.postfixVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
