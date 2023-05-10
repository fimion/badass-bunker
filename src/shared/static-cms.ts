import CMS from "@staticcms/core";
import React from "react";
import "@staticcms/core/dist/main.css";

const URLRegexPartial = 'https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*'

const URLPattern: [string, string] = [
  `^${URLRegexPartial}$`,
  'Must be a URL.'
]

const URLOptionalPattern: [string, string] = [
  `^(${URLRegexPartial}|null)$`,
  'Must be a URL or \'null\'.'
]

const ColorPattern: [string, string] = [
    "^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|null)$",
    "Must be a color."
]
CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
    local_backend: import.meta.env.DEV,
    media_folder: "public/uploads",
    public_folder: "/uploads",
    site_url: "https://badass-bunker.netlify.app",
    display_url: "https://badass-bunker.netlify.app",
    collections: [
      {
        name: "homebrew",
        label: "Homebrews",
        label_singular: "Homebrew",
        folder: "src/content/homebrew",
        create: true,
        slug: "{{slug}}",
        summary: "{{title}} - {{creatorName}}",
        sortable_fields: {
          fields: ["title"],
          default: {
            field: "title",
            direction: "Descending",
          },
        },
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Short Description", name: "description", widget: "string" },
          { label: "Publish Date", name: "publishDate", widget: "datetime" },
          { label: "Creator Name", name: "creatorName", widget:"string"},
          {
            label: "Creator URL",
            name: "creatorUrl",
            hint: "Must be a valid URL for the creator or \'pass\'.",
            widget:"string",
            required:false,
            default: 'pass',
            pattern: URLOptionalPattern,
          },
          {
            label: "Resource URL",
            name: "resourceUrl",
            hint: "Must be a valid URL to the Homebrew content.",
            widget:"string",
            required:true,
            pattern: URLPattern,
          },
          {
            label: "Image URL",
            name: "img",
            hint: "a url for a preview image or \'pass\'.",
            widget:"string",
            default: 'pass',
            required:false,
            pattern: URLOptionalPattern,
          },
          {
            label: "Image Alt text",
            name: "img_alt",
            hint: "Descriptive text for the preview image.",
            widget:"string",
            required: false,
            default: 'pass',
          },
          {
            label: "Color 1",
            name: 'color1',
            hint: 'Fallback gradient color 1',
            widget: 'color',
            required: false,
            default: "#141925",
          },
          {
            label: "Color 2",
            name: 'color2',
            hint: 'Fallback gradient color 2',
            widget: 'color',
            required: false,
            default: "#090b11"
          },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
      {
        name: "bmTool",
        label: "BM Tools",
        label_singular: "BM Tool",
        folder: "src/content/bmTool",
        create: true,
        slug: "{{slug}}",
        summary: "{{title}} - {{creatorName}}",
        sortable_fields: {
          fields: ["title"],
          default: {
            field: "title",
            direction: "Descending",
          },
        },
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Short Description", name: "description", widget: "string" },
          { label: "Publish Date", name: "publishDate", widget: "datetime" },
          { label: "Creator Name", name: "creatorName", widget:"string"},
          {
            label: "Creator URL",
            name: "creatorUrl",
            hint: "Must be a valid URL for the creator or \'pass\'.",
            widget:"string",
            required:false,
            default: 'pass',
            pattern: URLOptionalPattern,
          },
          {
            label: "Resource URL",
            name: "resourceUrl",
            hint: "Must be a valid URL to the Homebrew content.",
            widget:"string",
            required:true,
            pattern: URLPattern,
          },
          {
            label: "Image URL",
            name: "img",
            hint: "a url for a preview image or \'pass\'.",
            widget:"string",
            default: 'pass',
            required:false,
            pattern: URLOptionalPattern,
          },
          {
            label: "Image Alt text",
            name: "img_alt",
            hint: "Descriptive text for the preview image.",
            widget:"string",
            required: false,
            default: 'pass',
          },
          {
            label: "Color 1",
            name: 'color1',
            hint: 'Fallback gradient color 1',
            widget: 'color',
            required: false,
            default: "#141925",
          },
          {
            label: "Color 2",
            name: 'color2',
            hint: 'Fallback gradient color 2',
            widget: 'color',
            required: false,
            default: "#090b11"
          },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
});
