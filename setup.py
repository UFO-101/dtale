#!/usr/bin/env python
from __future__ import print_function

import logging
import sys

from setuptools import find_packages, setup
from setuptools.command.test import test as TestCommand


def read_file(path):
    # if this fails on windows then add the following environment variable (PYTHONUTF8=1)
    with open(path) as contents:
        return contents.read()


# Convert Markdown to RST for PyPI
# http://stackoverflow.com/a/26737672
try:
    import pypandoc

    pypandoc_func = (
        pypandoc.convert_file if hasattr(pypandoc, "convert_file") else pypandoc.convert
    )
    long_description = pypandoc_func("README.md", "rst")
    changelog = pypandoc_func("CHANGES.md", "rst")
except (IOError, ImportError, OSError):
    long_description = read_file("README.md")
    changelog = read_file("CHANGES.md")


class PyTest(TestCommand):
    user_options = [("pytest-args=", "a", "Arguments to pass to py.test")]

    def initialize_options(self):
        TestCommand.initialize_options(self)
        self.pytest_args = []

    def finalize_options(self):
        TestCommand.finalize_options(self)
        self.test_args = []
        self.test_suite = True

    def run_tests(self):
        logging.basicConfig(
            format="%(asctime)s %(levelname)s %(name)s %(message)s", level="DEBUG"
        )

        # import here, cause outside the eggs aren't loaded
        import pytest
        import six

        args = (
            [self.pytest_args]
            if isinstance(self.pytest_args, six.string_types)
            else list(self.pytest_args)
        )
        args.extend(
            [
                "--cov",
                "dtale",
                "--cov-report",
                "xml",
                "--cov-report",
                "html",
                "--junitxml",
                "junit.xml",
                "-v",
            ]
        )
        errno = pytest.main(args)
        sys.exit(errno)


setup(
    name="dtale",
    version="2.7.1",
    author="MAN Alpha Technology",
    author_email="ManAlphaTech@man.com",
    description="Web Client for Visualizing Pandas Objects",
    license="LGPL",
    long_description="\n".join((long_description, changelog)),
    keywords=["numeric", "pandas", "visualization", "flask"],
    url="https://github.com/man-group/dtale",
    install_requires=[
        "lz4<=2.2.1; python_version < '3.0'",
        "lz4; python_version > '3.0'",
        "certifi==2021.10.8; python_version == '2.7'",
        "certifi; python_version > '3.0'",
        "cycler; python_version > '3.0'",
        "cycler==0.10.0; python_version == '2.7'",
        "dash==1.21.0; python_version == '2.7'",
        "dash==2.0.0; python_version == '3.6'",
        "dash>=2.0.0; python_version > '3.6'",
        "dash-bootstrap-components<=0.10.5; python_version < '3.0'",
        "dash-bootstrap-components; python_version > '3.0'",
        "dash-colorscales",
        "dash_daq",
        "decorator==4.4.2; python_version == '2.7'",
        "et_xmlfile<=1.0.1; python_version < '3.6'",
        "et_xmlfile; python_version >= '3.6'",
        "Flask<=1.1.4; python_version < '3.7'",
        "Flask; python_version >= '3.7'",
        "Flask-Compress",
        "flask-ngrok; python_version > '3.0'",
        "future>=0.14.0",
        "itsdangerous<=1.1.0; python_version < '3.7'",
        "itsdangerous; python_version >= '3.7'",
        "kaleido==0.1.0; python_version <= '3.6'",
        "kaleido; python_version > '3.6'",
        "kiwisolver==1.1.0; python_version == '2.7'",
        "kiwisolver==1.1.0; python_version == '3.6'",
        "MarkupSafe==1.1.1; python_version == '2.7'",
        "MarkupSafe==2.0.1; python_version == '3.1'",
        "MarkupSafe==2.0.1; python_version == '3.2'",
        "MarkupSafe==2.0.1; python_version == '3.3'",
        "MarkupSafe==2.0.1; python_version == '3.4'",
        "MarkupSafe==2.0.1; python_version == '3.5'",
        "MarkupSafe==2.0.1; python_version == '3.6'",
        "matplotlib==2.2.5; python_version == '2.7'",
        "matplotlib==3.3.4; python_version == '3.0'",
        "matplotlib==3.3.4; python_version == '3.1'",
        "matplotlib==3.3.4; python_version == '3.2'",
        "matplotlib==3.3.4; python_version == '3.3'",
        "matplotlib==3.3.4; python_version == '3.4'",
        "matplotlib==3.3.4; python_version == '3.5'",
        "matplotlib==3.3.4; python_version == '3.6'",
        "matplotlib; python_version > '3.6'",
        "missingno<=0.4.2",
        "networkx==2.2; python_version <= '3.4'",
        "networkx==2.4; python_version == '3.5'",
        "networkx==2.5.1; python_version == '3.6'",
        "networkx==2.6.3; python_version == '3.7'",
        "networkx; python_version > '3.7'",
        "numpy==1.16.6; python_version < '3.0'",
        "numpy; python_version >= '3.0'",
        "openpyxl==2.6.4; python_version < '3.0'",
        "openpyxl; python_version >= '3.0'",
        "packaging<=21.0; python_version == '3.1'",
        "packaging<=21.0; python_version == '3.2'",
        "packaging<=21.0; python_version == '3.3'",
        "packaging<=21.0; python_version == '3.4'",
        "packaging<=21.0; python_version == '3.5'",
        "packaging<=21.0; python_version == '3.6'",
        "packaging<=21.0; python_version == '3.7'",
        "pandas",
        "pillow==8.4.0; python_version == '3.6'",
        "plotly==4.14.3; python_version < '3.6'",
        "plotly>=5.0.0; python_version >= '3.6'",
        "pyparsing==2.4.7; python_version == '2.7'",
        "requests; python_version >= '3.6'",
        "requests==2.27.1; python_version == '2.7'",
        "scikit-learn==0.20.4; python_version < '3.0'",
        "scikit-learn==0.24.2; python_version == '3.6'",
        "scikit-learn==1.0.2; python_version == '3.7'",
        "scikit-learn; python_version > '3.7'",
        "scipy==1.2.3; python_version == '2.7'",
        "scipy<=1.5.4; python_version == '3.0'",
        "scipy<=1.5.4; python_version == '3.1'",
        "scipy<=1.5.4; python_version == '3.2'",
        "scipy<=1.5.4; python_version == '3.3'",
        "scipy<=1.5.4; python_version == '3.4'",
        "scipy<=1.5.4; python_version == '3.5'",
        "scipy<=1.5.4; python_version == '3.6'",
        "scipy; python_version >= '3.8'",
        "scipy==1.7.3; python_version == '3.7'",
        "seaborn==0.9.1; python_version < '3.6'",
        "seaborn==0.11.2; python_version == '3.6'",
        "seaborn; python_version > '3.6'",
        "squarify",
        "statsmodels==0.10.2; python_version == '2.7'",
        "statsmodels==0.12.2; python_version == '3.0'",
        "statsmodels==0.12.2; python_version == '3.1'",
        "statsmodels==0.12.2; python_version == '3.2'",
        "statsmodels==0.12.2; python_version == '3.3'",
        "statsmodels==0.12.2; python_version == '3.4'",
        "statsmodels==0.12.2; python_version == '3.5'",
        "statsmodels==0.12.2; python_version == '3.6'",
        "statsmodels==0.12.2; python_version == '3.7'",
        "statsmodels; python_version > '3.7'",
        "strsimpy",
        "six",
        "xarray==0.11.3; python_version < '3.0'",
        "xarray; python_version >= '3.0'",
        "xlrd",
    ],
    extras_require={
        "arctic": ["arctic <= 1.79.4"],
        "dash-bio": [
            "dash-bio; python_version > '3.0'",
            "dash-bio==0.7.1; python_version == '2.7'",
        ],
        "r": ["rpy2; python_version > '3.0'"],
        "redis": ["redislite"],
        "streamlit": ["streamlit"],
        "swifter": ["swifter"],
        "tests": read_file("requirements-test.txt"),
    },
    classifiers=[
        "Development Status :: 4 - Beta",
        "License :: OSI Approved :: GNU Library or Lesser General Public License (LGPL)",
        "Operating System :: OS Independent",
        "Intended Audience :: Science/Research",
        "Programming Language :: Python",
        "Topic :: Scientific/Engineering",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
    ],
    cmdclass={"test": PyTest},
    packages=find_packages(exclude=["tests*", "script*"]),
    package_data={
        "dtale": [
            "dash_application/components/*",
            "static/dist/*",
            "static/dash/*",
            "static/css/*",
            "static/fonts/*",
            "static/images/*",
            "static/images/**/*",
            "static/maps/*",
            "templates/**/*",
            "templates/**/**/*",
        ]
    },
    entry_points={
        "console_scripts": [
            "dtale = dtale.cli.script:main",
            "dtale-streamlit = dtale.cli.streamlit_script:main",
        ]
    },
    zip_safe=False,
)
