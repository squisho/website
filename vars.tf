variable "domain_name" {
  type        = string
  description = "chrispetrone.com"
}

variable "bucket_name" {
  type        = string
  description = "chrispetrone-terraform"
}

variable "common_tags" {
  description = "Common tags you want applied to all components."
}
