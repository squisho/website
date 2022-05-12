variable "domain_name" {
  type    = string
  default = "chrispetrone.com"
}

variable "bucket_name" {
  type    = string
  default = "chrispetrone-terraform"
}

variable "common_tags" {
  default = "Common tags you want applied to all components."
}
