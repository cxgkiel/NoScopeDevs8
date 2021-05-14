import * as changeCase from "change-case";

export function getStateTemplate(
  name: string,
  isEmptyFeature: boolean
): string {
  return isEmptyFeature
    ? getBaseStateTemplate(name)
    :getBaseStateTemplate(name);
    // : getExampleStateTemplate(name);
}

function getBaseStateTemplate(name: string): string {
  const pascalCaseName = changeCase.pascalCase(name.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(name.toLowerCase());

  return `import 'package:freezed_annotation/freezed_annotation.dart';

part '${snakeCaseName}_state.freezed.dart';

@freezed
abstract class ${pascalCaseName}State with _$${pascalCaseName}State {
  /// Data is present state, also default case
  const factory ${pascalCaseName}State() = Data;

  /// Data is loading state
  const factory ${pascalCaseName}State.loading() = Loading;

  /// Error when loading data state
  const factory ${pascalCaseName}State.error([String message]) = Error;
}`;
}
/*
function getExampleStateTemplate(name: string): string {
  //   const pascalCaseName = changeCase.pascalCase(name.toLowerCase());
  const snakeCaseName = changeCase.snakeCase(name.toLowerCase());
  return `// Entities
//TODO: export entities
// export 'entities/your_entity.dart';

// Export Repositories
export 'repositories/i${snakeCaseName}_repository.dart';

// Export Use Cases
//TODO: export usecases
export 'usecases/example_addition.dart';
`;
}*/