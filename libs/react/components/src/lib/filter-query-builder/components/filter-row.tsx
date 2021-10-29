import {
  FilterRowProps as BaseFilterRowProps,
  Binding,
  OperationType,
  PropertyDescription,
} from 'react-query-filter';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FilterForNumerics, FilterOperation, PrimitiveType } from '@kleeen/types';
import { FilterOption, FilterSectionOption } from '../filter-query-builder.model';
import { IconButton, Tooltip } from '@material-ui/core';
import { KsAutocomplete, KsMenuItem, KsTextField } from '../..';
import { Translate, Variant } from '@kleeen/types';
import { isNilOrEmpty, isNotNilOrEmpty } from '@kleeen/common/utils';

import { AutocompleteInputChangeReason } from '@material-ui/lab/useAutocomplete';
import { Clear } from '@material-ui/icons';
import { SelectOption } from 'react-query-filter/dist/select-option';
import classnames from 'classnames';
import { useStyles } from '../filter-query-builder.styles';

const bem = 'ks-filter-selection-row';

interface FilterRowProps extends BaseFilterRowProps {
  combinator: SelectOption<Binding>;
  setCombinator: Dispatch<SetStateAction<SelectOption<Binding>>>;
  disabled?: boolean;
  properties: PropertyDescription[];
  translate: Translate;
}

export function FilterRow({
  bindings,
  combinator,
  disabled,
  fields,
  filter,
  onChangeValue,
  onRemove,
  operations,
  properties,
  selectStates,
  setCombinator,
  shouldRenderBindingSelect,
  shouldRenderValueInput,
  translate,
  ...restProps
}: FilterRowProps) {
  const [operators, setOperators] = useState<FilterOption[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<PropertyDescription | null>(null);
  const classes = useStyles();

  const { onChangeBinding, onChangeField, onChangeOperation } = selectStates;

  function handleChangeBase({
    label,
    type,
    value,
  }: {
    label?: string;
    type: FilterSectionOption;
    value: PrimitiveType;
  }) {
    switch (type) {
      case FilterSectionOption.Combinator: {
        const valueAsBinding = value as Binding;

        setCombinator({ label, value: valueAsBinding });
        onChangeBinding({ label, value: valueAsBinding });
        break;
      }

      case FilterSectionOption.Field: {
        const valueAsField = value as string;
        onChangeField({ value: valueAsField } as SelectOption<string>);
        break;
      }

      case FilterSectionOption.Operation: {
        const valueAsOperation = value as OperationType;

        onChangeOperation({ value: valueAsOperation } as SelectOption<OperationType>);
        break;
      }

      default:
        break;
    }
  }

  useEffect(() => {
    const valueAsField = fields[0] as unknown as string;
    onChangeField({ value: valueAsField } as SelectOption<string>);
  }, []);

  useEffect(() => {
    if (isNilOrEmpty(filter?.field)) {
      setSelectedProperty(null);
      return;
    }

    const newSelectedProperty = properties.find(
      (property: PropertyDescription) =>
        property.key === (filter?.field as unknown as SelectOption<string>)?.value,
    );

    if (isNotNilOrEmpty(newSelectedProperty)) {
      setSelectedProperty(newSelectedProperty);
    }
  }, [filter?.field]);

  useEffect(() => {
    if (isNilOrEmpty(selectedProperty?.type)) {
      setOperators([]);
      return;
    }

    const newOperators = getOperators({ translate, type: selectedProperty?.type });

    setOperators(newOperators);
  }, [selectedProperty]);

  return (
    <div className={classnames(bem, classes.row)}>
      {shouldRenderBindingSelect ? (
        <KsAutocomplete
          className={classnames(`${bem}__where-section`, classes.where)}
          disabled={disabled}
          disableClearable
          onChange={(_, { label, value }) =>
            handleChangeBase({ label, type: FilterSectionOption.Combinator, value })
          }
          options={bindings}
          getOptionLabel={getOptionLabel}
          getOptionSelected={getOptionSelected}
          renderInput={(params) => (
            <KsTextField
              variant={Variant.standard}
              {...params}
              InputProps={{ ...params.InputProps }}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
          renderOption={(option) => (
            <KsMenuItem key={option.value} selected={filter.binding === option.value} value={option.value}>
              {option.label}
            </KsMenuItem>
          )}
          value={combinator}
          {...restProps}
        />
      ) : (
        <span className={classnames(`${bem}__where-text`, classes.where)}>
          {translate('app.filterSelection.section.where')}
        </span>
      )}
      <KsAutocomplete
        className={classnames(`${bem}__option-section`, classes.option)}
        disabled={false}
        getOptionLabel={getOptionLabel}
        getOptionSelected={getOptionSelected}
        onChange={(_, value) => handleChangeBase({ type: FilterSectionOption.Field, value })}
        options={fields || []}
        renderInput={(params) => (
          <KsTextField
            variant={Variant.standard}
            {...params}
            InputProps={{ ...params.InputProps }}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
        renderOption={(option) => (
          <KsMenuItem
            key={option.value}
            selected={(filter.field as unknown as SelectOption<string>)?.value === option.value}
            value={option.value}
          >
            {option.label}
          </KsMenuItem>
        )}
        value={filter.field ?? ''}
      />
      <KsAutocomplete
        className={classnames(`${bem}__comparator-section`, classes.option)}
        disabled={false}
        disableClearable
        getOptionLabel={getOptionLabel}
        getOptionSelected={getOptionSelected}
        onChange={(_, value) => handleChangeBase({ type: FilterSectionOption.Operation, value })}
        options={operators}
        renderInput={(params) => (
          <KsTextField
            variant={Variant.standard}
            {...params}
            InputProps={{ ...params.InputProps }}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
        renderOption={(option) => (
          <KsMenuItem key={option.value} selected={filter.operation === option.value} value={option.value}>
            {option.label}
          </KsMenuItem>
        )}
        value={filter?.operation ?? getDefaultOperator(operators) ?? ''}
      />
      {shouldRenderValueInput && (
        <KsAutocomplete
          disabled={false}
          freeSolo
          onInputChange={(_, value: string, signal: AutocompleteInputChangeReason) => {
            if (signal === 'clear' || (signal === 'input' && isNilOrEmpty(value))) {
              onChangeValue({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
            } else if (isNotNilOrEmpty(value)) {
              onChangeValue({ target: { value } } as ChangeEvent<HTMLInputElement>);
            }
          }}
          options={[]}
          renderInput={(params) => (
            <KsTextField
              variant={Variant.standard}
              {...params}
              InputProps={{ ...params.InputProps }}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      )}
      <Tooltip title={translate('app.filterSelection.filter.remove')} placement="left">
        <IconButton onClick={onRemove} className={classnames(`${bem}__removeButton`, classes.removeButton)}>
          <Clear style={{ fontSize: 17 }} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

interface GetOperatorsProps {
  translate: Translate;
  type: string;
}

//#region Private members
function getOperators({ translate, type }: GetOperatorsProps): FilterOption[] {
  const numericalOperations = [
    {
      label: translate(`app.filter.operator.${FilterOperation.Is}`),
      value: FilterOperation.Is,
      default: true,
    },
    {
      label: translate(`app.filter.operator.${FilterOperation.GreaterOrEqualThan}`),
      value: FilterOperation.GreaterOrEqualThan,
    },
    {
      label: translate(`app.filter.operator.${FilterOperation.LessOrEqualThan}`),
      value: FilterOperation.LessOrEqualThan,
    },
  ];
  const defaultOperation = [
    {
      label: translate(`app.filter.operator.${FilterOperation.Is}`),
      value: FilterOperation.Is,
      default: true,
    },
  ];

  return FilterForNumerics.includes(type) ? numericalOperations : defaultOperation;
}

function getDefaultOperator(operators: FilterOption[]): FilterOption {
  const defaultOperator = operators.find((op) => op.default);
  return defaultOperator || operators?.[0];
}

function getOptionLabel({ label }: FilterOption) {
  return isNotNilOrEmpty(label) ? String(label) : '';
}

function getOptionSelected(option: FilterOption, value: FilterOption) {
  return option.value === value?.value;
}
//#endregion
