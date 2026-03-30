name: Suggest a GIF
description: Suggest a new GIF for the bot
title: "[GIF Suggestion] "
labels: ["gif suggestion"]
assignees: ["LillithRosePup"]

body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to suggest a GIF!

  - type: input
    id: gif_url
    attributes:
      label: GIF URL
      description: Paste the Tenor GIF URL here
      placeholder: https://tenor.com/view/...
    validations:
      required: true

  - type: input
    id: tags
    attributes:
      label: Tags
      description: Comma-separated tags (e.g., truth, false, etc.)
      placeholder: truth, false, clap
    validations:
      required: true

  - type: textarea
    id: caption
    attributes:
      label: Caption (optional)
      description: Optional caption to send with the GIF
      placeholder: Your caption here...
    validations:
      required: false

  - type: input
    id: name
    attributes:
      label: Your Name
      description: Used in attribution
      placeholder: Your name
    validations:
      required: true

  - type: input
    id: discord_id
    attributes:
      label: Discord ID
      description: Used in attribution
      placeholder: Your Discord ID
    validations:
      required: false