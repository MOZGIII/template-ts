variable "TARGETS" {
  type = map(string)
  default = {
    "example-spa" = "spa"
  }
}

group "default" {
  targets = keys(TARGETS)
}

target "base" {
  dockerfile = "Dockerfile"
  # ssh = ["default"]
}

target "spa" {
  inherits = ["base"]
  target = "spa-runtime"
}

target "main" {
  matrix = {
    key = keys(TARGETS)
  }
  name = key
  inherits = [TARGETS[key], "docker-metadata-action-${key}"]
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

