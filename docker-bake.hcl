variable "TARGETS" {
  type = map(string)
  default = {
    "example-spa" = "spa"
    "example-cli" = "node"
  }
}

group "default" {
  targets = keys(TARGETS)
}

target "base" {
  dockerfile = "Dockerfile"
  # ssh = ["default"]
}

target "main" {
  matrix = {
    key = keys(TARGETS)
  }
  name = key
  inherits = ["base", "docker-metadata-action-${key}"]
  target = TARGETS[key]
  args = {
    PACKAGE = key
  }
}

# Targets to allow injecting customizations from Github Actions.

target "docker-metadata-action" {
  matrix = {
    key = keys(TARGETS)
  }
  name = "docker-metadata-action-${key}"
}

