/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Development Root Directory - The root folder that will be scanned recursively for projects. Leave empty to auto-detect ~/Developer, ~/Development, ~/Projects, ~/Code or ~/dev. */
  "developmentPath": string,
  /** Additional Project Directories - Comma-separated list of extra absolute paths to scan alongside the root directory (e.g. ~/Work,~/OpenSource). */
  "customProjectDirectories"?: string,
  /** Scan Depth - How many directory levels deep to search for projects below each root. */
  "scanDepth": "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10",
  /** Exclude Folder Names - Comma-separated folder names to skip while scanning. */
  "excludeFolderNames": string,
  /** Default VS Code Command/Path - Fallback command or absolute path used to open projects in VS Code when a project type has no specific mapping. */
  "defaultVSCodePath": string,
  /** Default WebStorm Command/Path - Fallback command or absolute path used to open projects in WebStorm when a project type has no specific mapping. */
  "defaultWebStormPath": string,
  /** Default iTerm App Path - Fallback path to the iTerm.app bundle used when a project type has no specific mapping. */
  "defaultITermPath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `list-projects` command */
  export type ListProjects = ExtensionPreferences & {}
  /** Preferences accessible in the `manage-app-paths` command */
  export type ManageAppPaths = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `list-projects` command */
  export type ListProjects = {}
  /** Arguments passed to the `manage-app-paths` command */
  export type ManageAppPaths = {}
}

