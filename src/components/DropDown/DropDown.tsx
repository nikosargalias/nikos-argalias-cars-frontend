import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import {
    StyledDropdown,
    StyledDropdownButton,
    StyledSelect,
    StyledOption,
} from './DropDown.styled';

import { v4 as uuidv4 } from 'uuid';

type DropdownProps = {
    message: string;
    options: {
        label: string;
    }[];
    id: string;
    onChange: (e: string) => void;
};

const DropDown = ({ message, onChange, id, options = [] }: DropdownProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeOptionLabel, setActiveOptionLabel] = useState('');
    const buttonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
    const dropdownRef = useRef({}) as React.MutableRefObject<HTMLUListElement>;

    const handleSelectOption = useCallback(
        (label) => {
            setActiveOptionLabel(label);
            setIsExpanded(false);
            onChange(label);
        },
        [onChange]
    );

    const handleOnClickButton = useCallback(() => {
        setIsExpanded((prevState) => !prevState);
    }, []);

    const dropdownOptions = useMemo(() => {
        return options.map(({ label }: any) => {
            const id = uuidv4();
            return (
                <StyledOption
                    key={id}
                    role='option'
                    aria-selected={activeOptionLabel === label}
                    onClick={(e) => handleSelectOption(label)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSelectOption(label);
                        }
                    }}
                    id={id}
                >
                    {label}
                </StyledOption>
            );
        });
    }, [activeOptionLabel, handleSelectOption, options]);

    const defaultMessage = useMemo(() => {
        if (activeOptionLabel) return activeOptionLabel;

        return options.length > 0 ? message : 'No options available';
    }, [options, activeOptionLabel, message]);

    const handleFocusOnDefaultOption = useCallback(() => {
        if (options.length > 0) {
            if (dropdownRef.current) {
                const elems = Array.from(
                    dropdownRef.current.children
                ) as HTMLLIElement[];
                elems.forEach((el) => el.setAttribute('tabindex', '-1'));

                if (activeOptionLabel) {
                    const activeElem = elems.find(
                        (el) => el.textContent === activeOptionLabel
                    );
                    if (activeElem) {
                        activeElem.setAttribute('tabindex', '0');
                        activeElem.focus();
                    }
                } else {
                    elems[0].focus();
                }
            }
        }
    }, [activeOptionLabel, dropdownRef, options]);

    useEffect(() => {
        if (isExpanded) {
            handleFocusOnDefaultOption();
        }
    }, [isExpanded, handleFocusOnDefaultOption]);

    const handleFocusOnOption = useCallback(
        (elems: HTMLLIElement[], next: 1 | -1) => {
            const focusedElemIndex = elems.findIndex(
                (el) => el === document.activeElement
            );
            let nextFocusElement: HTMLLIElement;
            if (focusedElemIndex === 0 && next === -1) {
                nextFocusElement = elems[elems.length - 1];
            } else {
                nextFocusElement =
                    elems[(focusedElemIndex + next) % elems.length];
            }
            nextFocusElement.focus();

            elems.forEach((el) => {
                if (el === nextFocusElement) {
                    el.setAttribute('tabindex', '0');
                } else {
                    el.setAttribute('tabindex', '-1');
                }
            });
        },
        []
    );

    const handleKeydown = useCallback(
        (e) => {
            if (e.key === 'Tab') {
                setIsExpanded(false);
            }
            if (e.key.includes('Arrow')) e.preventDefault();

            const elems = Array.from(
                dropdownRef.current.children
            ) as HTMLLIElement[];

            switch (e.key) {
                case 'ArrowLeft':
                    handleFocusOnOption(elems, -1);
                    return;
                case 'ArrowRight':
                    handleFocusOnOption(elems, 1);
                    return;
            }
        },
        [handleFocusOnOption]
    );

    return (
        <StyledDropdown>
            <StyledDropdownButton
                aria-haspopup='listbox'
                aria-labelledby='exp_elem exp_button'
                id={id}
                aria-expanded={isExpanded}
                ref={buttonRef}
                onClick={handleOnClickButton}
                isExpanded={isExpanded}
                className='icon-chevron'
                type='button'
            >
                {defaultMessage}
            </StyledDropdownButton>
            {isExpanded && (
                <StyledSelect
                    id='exp_elem_list'
                    tabIndex={-1}
                    role='listbox'
                    aria-labelledby='a11y-dropdown-label'
                    ref={dropdownRef}
                    onKeyDown={handleKeydown}
                >
                    {dropdownOptions}
                </StyledSelect>
            )}
        </StyledDropdown>
    );
};

export { DropDown };
